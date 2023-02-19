<p>Number of visitors: <span id="counter"></span></p>

	<script>
		// Replace API_GATEWAY_URL with your API Gateway endpoint URL
		const API_GATEWAY_URL = "https://aaofhqcypg.execute-api.us-east-1.amazonaws.com/beta";

		fetch(API_GATEWAY_URL)
			.then(response => response.json())
			.then(data => {
				// Update the visitor counter with the number of visitors returned by the Lambda function
				document.getElementById("counter").innerText = data.body;
			})
			.catch(error => {
				console.log(error);
			});
	</script>
