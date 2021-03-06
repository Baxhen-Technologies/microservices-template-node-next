import { Publisher, Subjects, PaymentCreatedEvent } from '@baxpom/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
