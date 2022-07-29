package agjs.service.impl.room;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import agjs.bean.room.RoomInformationFacilitiesId;
import agjs.bean.room.RoomInformationFacilitiesPo;
import agjs.bean.room.RoomStylePo;
import agjs.dao.room.RoomInformationFacilitiesDao;
import agjs.dao.room.RoomStyleDao;
import agjs.service.room.RoomStyleService;

@Service
public class RoomStyleServiceImpl implements RoomStyleService<RoomStylePo> {
	@Autowired
	private RoomStyleDao<RoomStylePo> roomStyleDao;
	@Autowired
	private RoomInformationFacilitiesDao roomInformationFacilitiesDao;

//	public RoomStyleServiceImpl(RoomStyleDaoImpl roomStyleDao,
//			RoomInformationFacilitiesDao roomInformationFacilitiesDao) {
//		this.roomStyleDao = roomStyleDao;
//		this.roomInformationFacilitiesDao = roomInformationFacilitiesDao;
//	}

	@Override
	public List<RoomStylePo> getAll() {
		List<RoomStylePo> list = new ArrayList<RoomStylePo>();
		try {
			list = roomStyleDao.getAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Transactional
	@Override
	public Integer addRoomStyle(RoomStylePo roomStylePo, List<Integer> roomFacilitiesIdList) {
		// 新增主要table
		Integer id = roomStyleDao.add(roomStylePo);
		System.out.println(id);
		// 新增相關FK的檔案(兩個表格的id，雙主鍵)
		for (Integer facilitiesId : roomFacilitiesIdList) {
			RoomInformationFacilitiesId roomInformationFacilitiesId = new RoomInformationFacilitiesId();
			roomInformationFacilitiesId.setRoomFacilitiesId(facilitiesId);
			roomInformationFacilitiesId.setRoomStyleId(id);
			
			RoomInformationFacilitiesPo roomInformationFacilitiesPo = new RoomInformationFacilitiesPo();
			roomInformationFacilitiesPo.setId(roomInformationFacilitiesId);
			
			roomInformationFacilitiesDao.add(roomInformationFacilitiesPo);
		}
		return id;
	}

	@Override
	public RoomStylePo getById(Integer id) {
		return roomStyleDao.getId(id);
	}

}