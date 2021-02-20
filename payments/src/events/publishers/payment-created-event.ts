import { Publisher, Subjects, PaymentCreatedEvent } from '@baxdocs/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
