import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import 'antd/dist/antd.css';

ReactDOM.render(
	<React.StrictMode>
		<h1>Hello world!</h1>
		<Button>Push me!</Button>
	</React.StrictMode>,
	document.getElementById('root'),
)
