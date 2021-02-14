import { LitElement, html, css, customElement, property } from 'lit-element/lit-element'

@customElement('first-file')
export class FirstFile extends LitElement {
	@property({ type: String }) message = 'Learn LitElement'
	@property({ type: String }) pageName = 'First Page'

	render() {
		return html`
			<div class="wrapper">
				<h1>Lit Element + Snowpack</h1>
				<p>${this.pageName}</p>
				<p>Edit <code>src/first-file.js</code> and save to reload.</p>
				<a
					href="https://lit-element.polymer-project.org"
					class="link"
					target="_blank"
					rel="noopener noreferrer"
				>
					${this.message}
				</a>
			</div>
		`
	}

	static get styles() {
		return [
			css`
				h1 {
					font-size: 4rem;
				}
				.wrapper {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					height: 100vh;
					background-color: #2196f3;
					background: linear-gradient(315deg, #b4d2ea 0%, #2196f3 100%);
					font-size: 24px;
				}
				.link {
					color: white;
				}
			`,
		]
	}
}
