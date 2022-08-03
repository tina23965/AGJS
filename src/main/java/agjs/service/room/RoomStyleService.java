package agjs.service.room;

import java.util.List;

import agjs.bean.room.RoomInformationFacilitiesPo;
import agjs.bean.room.RoomStylePo;

public interface RoomStyleService<T> {

	List<T> getAll();

	Integer addRoomStyle(RoomStylePo roomStylePo, List<Integer> roomFacilitiesIdList);

	T getById(Integer id);
	
	void delete(Integer[] roomStyleIds);

	List<RoomInformationFacilitiesPo> findFacilitiesByRoomStyleId(Integer roomStyleId);

	

}
