const Blog = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-2 uppercase ">
        Questions<span className="text-green-500">Answer</span>
      </h1>
      <div className="p-8 space-y-2">
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              An access token is a code that grants permission to access certain
              resources or perform actions on a website or application. It
              serves as proof of authentication and is typically issued when a
              user logs in. The access token is sent with each subsequent
              request to the server to authenticate the user and authorize
              access to protected resources. A refresh token, on the other hand,
              is a code that allows the user to obtain a new access token when
              the current one expires. It's like having a special voucher that
              can be exchanged for a new ticket without the need to log in
              again. To store these tokens on the client-side, a secure storage
              mechanism should be used. The recommended options are
              "localStorage" or "sessionStorage" provided by web browsers. These
              storage areas are like secure lockers that only the website or
              application and the user can access. By storing the tokens
              securely, the client can retrieve and use them when needed for
              subsequent requests or refreshing the access token without
              compromising the user's security.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
          what is different between  SQL and NoSQL databases?

          </div>
          <div className="collapse-content">
            <p>SQL databases are relational and structured, using tables and predefined schemas. NoSQL databases are non-relational and unstructured, allowing flexible data models. SQL offers strong consistency and ACID properties, while NoSQL emphasizes scalability, high availability, and eventual consistency.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS ?
          </div>
          <div className="collapse-content">
            <p>Express.js: Web application framework for Node.js.
Nest.js: Progressive Node.js framework with TypeScript, built on Express.js, for scalable and maintainable applications.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work ?

          </div>
          <div className="collapse-content">
            <p>MongoDB aggregate is a powerful framework for data aggregation and analysis. It allows combining multiple operations like grouping, filtering, sorting, and calculating, to process data within a collection. Aggregation pipelines are constructed using stages that transform and manipulate the data, providing flexible and efficient ways to perform complex queries and analytics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
