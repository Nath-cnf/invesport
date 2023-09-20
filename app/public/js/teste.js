const sdk = require('api')('@devpagbank/v2.2#2bl30ll2cmq9w');

sdk.criarAssinatura({
  plan: {id: 'PLAN_DESTAQUE-USER-'},
  amount: {currency: 'BRL', value: 999},
  reference_id: 'InveSport-Assinatura',
  payment_method: [{type: 'CREDIT_CARD'}]
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));