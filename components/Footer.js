// footer component
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <p>©2022 ALL RIGHTS RESERVED</p>
        </div>
      </div>

      {/* jsx style */}
      <style jsx>
        {`
         .footer-container{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: #080712;
            color: #fff;
         }


         p{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            margin-top: 1rem;
         }

        `}
      </style>
     
    </>
  );
};

export default Footer;