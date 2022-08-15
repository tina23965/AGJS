package agjs.service.order;

import java.util.List;

import agjs.bean.journey.JourneyItemPo;
import agjs.bean.order.OrderSubmitdVo;
import agjs.bean.order.SalesOrderHeaderPo;
import agjs.bean.order.SalesOrderItemPo;
import agjs.bean.user.UserPo;

public interface OrderProcessService {

	String orderProcess(OrderSubmitdVo orderSubmitdVo);

	UserPo checkOrderUser(UserPo user);

	SalesOrderHeaderPo createOrder(OrderSubmitdVo orderSubmitdVo, UserPo user);

	Boolean checkSOH(SalesOrderHeaderPo salesOrderHeaderPo);

	Integer createSOH(SalesOrderHeaderPo salesOrderHeaderPo, Integer userId);

	List<SalesOrderItemPo> checkSalesOrderItem(List<SalesOrderItemPo> salesOrderItemPoList, Integer sohId);

	List<Integer> createSalesOrderItem(List<SalesOrderItemPo> salesOrderItemPoList, Integer sohId);

	List<JourneyItemPo> checkjourneyItem(List<JourneyItemPo> journeyItemPoList, Integer sohId);

	List<Integer> createjourneyItem(List<JourneyItemPo> journeyItemPoList, Integer sohId);

}