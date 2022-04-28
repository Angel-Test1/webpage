import PropTypes from 'prop-types';

const Footer = (props) => (
	<footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
		<p className="copyright">&copy; Fankot v2 2022</p>
	</footer>
)

Footer.propTypes = {
	timeout: PropTypes.bool
}

export default Footer
