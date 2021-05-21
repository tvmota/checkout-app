import Payment from 'payment';
import * as yup from 'yup';

const checkCardNumber = cardNumber => 
  new Promise(resolve => resolve(Payment.fns.validateCardNumber(cardNumber)));

const checkCardValidity = cardValidity =>
  new Promise(resolve => resolve(Payment.fns.validateCardExpiry(cardValidity)));

const checkCVV = cardCVV =>
  new Promise(resolve => resolve(Payment.fns.validateCardCVC(cardCVV)));

const formSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .required()
    .test('checkCardNumber', 'Número do cartão inválido', checkCardNumber),
  clientName: yup
    .string()
    .required('Insira seu nome completo'),
  cardValidity: yup
    .string()
    .required()
    .test('checkValidity', 'Data inválida', checkCardValidity),
  cardSecurityCode: yup
    .string()
    .required()
    .test('checkCVV', 'Código inválido', checkCVV),
  numberParcels: yup
    .string()
    .required('Insira o número de parcelas'),
});

export { formSchema };
