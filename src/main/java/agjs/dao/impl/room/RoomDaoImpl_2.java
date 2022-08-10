package agjs.dao.impl.room;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import javax.persistence.PersistenceContext;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import agjs.bean.journey.JourneyPo;
import agjs.dao.room.RoomDao_2;

@Repository
public class RoomDaoImpl_2 implements RoomDao_2 {
	@PersistenceContext
	private Session session;
	
	//訂單修改1：判斷該日期、房型、數量是否符合使用者的修改需求
	@Override
	public Integer selectFromDateAndRoomStyle(Date startDate, Date endDate, String roomName) {
		String sql="select count(r.ROOM_ID) from ROOM r "
				+ "where r.ROOM_ID not in "
				+ "(select rur.ROOM_ID from ROOM_USED_RECORD rur "
				+ "where (?1 < rur.ORDER_END_DATE) and (?2 > rur.ORDER_START_DATE)) "
				+ "and r.ROOM_STYLE_ID = (select rs.ROOM_STYLE_ID "
				+ "from ROOM_STYLE rs where rs.ROOM_NAME like ?3)";
		

		BigInteger bigInteger = (BigInteger) session.createSQLQuery(sql)
			.setParameter(1, startDate).setParameter(2, endDate).setParameter(3, roomName).uniqueResult();
		return  bigInteger.intValue();
	}
	
	//select APPLY_LIMIT from JOURNEY where JOURNEY_NAME like "林間巡禮";
	//訂單修改2：確認行程人數上限
	@Override
	public Integer selectByJourneyName(String name) {
		String hql="select applyLimit from JourneyPo where journeyName like :journeyName";

		return session.createQuery(hql, Integer.class)
				.setParameter("journeyName", name).uniqueResult();
	}
	
	//訂單修改3：確認當天行程目前總人數
	@Override
	public Integer selectByDateAndName(Date startDate, String name) {
		String sql="select sum(ji.ADULTS)+sum(ji.CHILDREN) "
				+ "from JOURNEY_ITEM ji where ji.JOURNEY_DATE = ?1 "
				+ "and ji.JOURNEY_ID = ("
				+ "select j.JOURNEY_ID from JOURNEY j "
				+ "where j.JOURNEY_NAME like ?2 )";
		
//		BigInteger bigInteger = (BigInteger) session.createSQLQuery(sql)
//		.setParameter(1, startDate).setParameter(2, name).uniqueResult();
		BigDecimal bigDecimal = (BigDecimal) session.createSQLQuery(sql)
				.setParameter(1, startDate).setParameter(2, name).uniqueResult();
		return bigDecimal.intValue();
	}
	
}
