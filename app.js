import express from "express"
import fetch from "node-fetch"
import { cors } from "./middleware.js"

const app = express()
const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", cors, (_, res) => {
	res.send("API Online!")
})

app.get("/:id", cors, async (req, res) => {
	try {
		const videoId = req.params.id

		const apiUrl = `https://shay.loan/${videoId}`
		const response = await fetch(apiUrl)

		if (!response.ok) {
			throw new Error("Error downloading the video file")
		}

		res.setHeader("Content-Type", "video/mp4")
		res.setHeader(
			"Content-Disposition",
			`attachment; filename="${videoId}.mp4"`
		)
		response.body.pipe(res)
	} catch (error) {
		console.error(error)
		res.status(500).send(error.message)
	}
})

app.get("*", cors, (_, res) => {
    res.status(404).send("Not Found")
})