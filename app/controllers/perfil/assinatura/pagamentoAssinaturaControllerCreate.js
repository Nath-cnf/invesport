const stripe = require("../../../../server/payments/stripe");

const usuarioModel = require("../../../models/Usuario");
const jwt = require("jsonwebtoken");

class PagamentoAssinaturaController {
	async createCustomerSubscription(req, res) {
		try {
			const token = req.session.token;
			const { userId } = jwt.decode(token, process.env.SECRET);
			const user = await usuarioModel.findUserById(userId);
            let customer = {
				id: user.customer_id
			};

			if (!customer.id) {
                customer = await stripe.customers.create({
                    email: user.email,
                })
            }

			const subscription = await stripe.subscriptions.create({
				customer: customer.id,
				items: [
					{
						price: "price_1O1wg1G905OAea9EenTxXXcP"
					},
				],
				payment_behavior: "default_incomplete",
				expand: ["latest_invoice.payment_intent"]
			});

			await usuarioModel.updateUserCustomerId(userId, customer.id);

			return res.send({
			    clientSecret: subscription.latest_invoice.payment_intent.client_secret
			});
		} catch (erro) {
			console.log(erro);
			return res.send({ erro });
		}
	}
}

const PagamentoAssinaturaControllerCreate = new PagamentoAssinaturaController();

module.exports = PagamentoAssinaturaControllerCreate;