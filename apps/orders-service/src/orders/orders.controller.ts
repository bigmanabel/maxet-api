import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto, OrderQueryDto, UpdateOrderDto } from '@app/orders';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaginationQueryDto } from '@app/shared';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @MessagePattern('orders.create')
  create(@Payload() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern('orders.findAll')
  findAll(@Payload() paginationQueryDto: PaginationQueryDto, @Payload() orderQueryDto: OrderQueryDto) {
    return this.ordersService.findAll(paginationQueryDto, orderQueryDto);
  }

  @MessagePattern('orders.findOne')
  findOne(@Payload('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @MessagePattern('orders.update')
  update(@Payload('id')id: string, @Payload() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @MessagePattern('orders.delete')
  remove(@Payload() id: string) {
    return this.ordersService.remove(id);
  }

  @MessagePattern('orders.deliveries')
  deliveries(@Payload('id') id: string) {
    return this.ordersService.deliveries(id);
  }
}
