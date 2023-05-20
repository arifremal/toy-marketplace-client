

const Footer = () => {
    return (
        <div>
           <footer className="footer p-10 bg-stone-200	 text-base-content">
  <div>
  <a className="btn btn-ghost normal-case text-3xl">Toy <span className="text-green-500">Mart</span></a>
  <p className="ms-5">Bringing Joy to Every Child</p>
  </div> 
  <div>
    <span className="footer-title">Toys</span> 
    <a className="link link-hover">American Girl</a> 
    <a className="link link-hover">Barbie Toy</a> 
    <a className="link link-hover">Baby Dolls</a> 
    
  </div> 
  <div>
    <span className="footer-title">Pages</span> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">All Toy</a> 
    <a className="link link-hover">Blog</a> 

  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;