import { Subjects } from './subjects';
import { OrderStatus } from './types/orders-status';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    version: number;
    ticket: {
      price: number;
      id: string;
    };
  };
}
