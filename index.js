$("#form").alpaca({
	schema: {
		"title": "Open API designer",
		"type": "object",
		"properties": {
			"info": {
				"type": "object",
				"title": "Info",
				"properties": {
					"title": {
						"type": "string",
						"title": "Title"
					},
					"version": {
						"type": "string",
						"title": "Version",
					},
					"termsOfService": {
						"type": "string",
						"title": "Terms of Service",
					},
					"contact": {
						"title": "Contact",
						"type": "object",
						"properties": {
							"name": {
								"type": "string",
								"title": "Name"
							},
							"url": {
								"type": "string",
								"format": "url",
								"title": "URL"
							},
							"email": {
								"type": "string",
								"format": "email",
								"title": "Email"
							}
						}
					},
					"license": {
						"title": "License",
						"type": "object",
						"properties": {
							"name": {
								"type": "string",
								"title": "Name"
							},
							"url": {
								"type": "string",
								"format": "url",
								"title": "URL"
							},
						}
					},
					"host": {
						"type": "string",
						"title": "Host"
					},
					"basePath": {
						"type": "string",
						"title": "Base path"
					}
				}
			},
			"schemes": {
				"title": "Schemes",
				"type": "array",
				"items": {
					"title": "Scheme",
					"type": "string",
					"enum": ["http", "https", "ws", "wss"]
				},
				"minItems": 1
			}
		}
	}
})