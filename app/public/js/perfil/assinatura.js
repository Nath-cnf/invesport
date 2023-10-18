const stripe = Stripe("pk_live_51NEzE6G905OAea9EXtAoN55BALzufyaCSvC112MSnXeZYzDn1hfnainQ2xXtHDEipFvmD065A3cEx6i7PR1EmpMJ00pOv3JZIL");

const form = document.querySelector("#assinatura-form");

function setMessage(message) {
	const messageDiv = document.querySelector("#mensagens");
	messageDiv.innerHTML = message;
}

fetch("/pagamento-assinatura", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		product: "price_1O1wg1G905OAea9EenTxXXcP"
	}),
}).then(async (res) => {
	const jsonRes = await res.json();

    console.log(jsonRes)

	if (jsonRes.erro) {
		setMessage(`Erro de sistema. Por favor tente novamente mais tarde!`);
		return;
	}

	const clientSecret = jsonRes.clientSecret;
	const elements = stripe.elements({
		clientSecret,
	});

	const paymentElement = elements.create("payment", {
		layout: "tabs",
		fields: {
			billingDetails: {
				name: "auto",
				email: "auto",
			},
		},
	});
	paymentElement.mount("#cartao-elemento");

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		stripe
			.confirmPayment({
				elements,
				confirmParams: {
					return_url: `https://invesport.up.railway.app/compra-efetuada`,
				},
			})
			.then(function (result) {
				if (result.error) {
					setMessage(`Pagamento não realizado: ${result.error.message}`);
				}
			});
	});
});

// This sample only supports a Subscription with payment
// upfront. If you offer a trial on your subscription, then
// instead of confirming the subscription's latest_invoice's
// payment_intent. You'll use stripe.confirmCardSetup to confirm
// the subscription's pending_setup_intent.
// See https://stripe.com/docs/billing/subscriptions/trials