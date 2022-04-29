import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faDiscord from '@fortawesome/fontawesome-free-brands/faDiscord'
import faSpotify from '@fortawesome/fontawesome-free-brands/faSpotify'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faSoundcloud from '@fortawesome/fontawesome-free-brands/faSoundcloud'

class Main extends React.Component {
	render() {

		let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

		return (
			<div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
				<article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
					<h2 className="major">Projects</h2>
					<span className="image main"><img loading='lazy' src="/static/images/code.jpg" alt="" /></span>
					<ul className='actions vertical'>
						<li>Stay Tuned...</li>
					</ul>
					{close}
				</article>

				<article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
					<h2 className="major">About</h2>
					<span className="main"><img loading='lazy' src="/static/images/cider.gif" style={{ margin: 'auto', marginBottom: 'calc(30px - 1em)', marginLeft: 'calc(50% - 50px)', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} alt="" /></span>
					<p style={{ textAlign: 'center' }}>
						Hello, I'm Fankot, <br />
						I'm a Developer, Hacker and a Student, currently in 1st Year Diploma!
					</p>
					{close}
				</article>

				<article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
					<h2 className="major">Links</h2>
					<ul className="icons">
					<li><a href="/coming-soon">
							<FontAwesomeIcon icon={faDiscord} />
						</a> Coming Soon... </li>
					</ul>
					{close}
				</article>

			</div>
		)
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool
}

export default Main
