export default function Newsletter() {
  return (
    <div className="newsletterSection">
      <h2>Stay <span>Updated</span></h2>
      <p>Get updates, patch notes and early access drops straight to your inbox.</p>

      <form
        action="https://midnighthourgame.us16.list-manage.com/subscribe/post?u=772e792126471fafe9a4fa7bb&id=af3434fd36&f_id=00b326e1f0"
        method="post"
        target="_blank"
        className="newsletterForm"
      >
        <input
          type="email"
          name="EMAIL"
          required
          placeholder="Enter your email address..."
          className="newsletterInput"
        />
        {/* Mailchimp bot protection — do not remove */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
          <input type="text" name="b_e9795a2608724b96d3c91ad4c_58415ae77b" tabIndex="-1" defaultValue="" />
        </div>
        <button type="submit" className="newsletterBtn">Subscribe</button>
      </form>
    </div>
  );
}
