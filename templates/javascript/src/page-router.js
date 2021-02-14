import { LitElement, html, css, customElement, property } from 'lit-element'
import { Router } from '@vaadin/router'

import './views/first-file.js'
import './views/second-file.js'

@customElement('page-router')
export class PageRouter extends LitElement {
	@property({ type: Object }) myProp = {}

	firstUpdated(changedProperties) {
		const routerView = this.shadowRoot.querySelector('#routerView')
		this.router = new Router(routerView)
		this.router.setRoutes([
			{
				path: '/',
				component: 'first-file',
			},
			{
				path: '/first',
				component: 'first-file',
			},
			{
				path: '/second',
				component: 'second-file',
			},
			{
				path: '(.*)',
				component: 'first-file',
			},
		])
	}

	render() {
		return html`
			<ul>
				<li><a href="./first">First Page</a></li>
				<li><a href="./second">Second Page</a></li>
			</ul>
			<div id="routerView"></div>
		`
	}

	static get styles() {
		return [css``]
	}
}
