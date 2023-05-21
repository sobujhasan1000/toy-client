import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-green-200 text-center m-2 rounded-md p-6'>
                <h1>What is an access token and refresh token?</h1>
                <p>Access token the resource you are requesting or not.
                    They are usually expired tokens with a short validity period.
                    and Refresh token The refresh token is used
                    to generate a new access token.</p>
            </div>
            <div className='bg-green-200 text-center m-2 rounded-md p-6'>
                <h1>How do they work and where should we store them on the client-side?</h1>
                <p>we can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server.</p>
            </div>
            <div className='bg-green-200 text-center m-2 rounded-md p-6'>
                <h1>Compare SQL and NoSQL databases?</h1>
                <p>NoSQL databases use dynamic schemas for unstructured data.
                    NoSQL databases scale horizontally,
                    whereas SQL databases scale vertically.
                    Whereas SQL databases are table-based,
                    NoSQL databases are document,
                    key-value, graph, or wide-column stores.</p>
            </div>
            <div className='bg-green-200 text-center m-2 rounded-md p-6'>
                <h1>What is express js?</h1>
                <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.</p>
            </div>
            <div className='bg-green-200 text-center m-2 rounded-md p-6'>
                <h1>What is Nest JS?</h1>
                <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.</p>
            </div>
            <div className='bg-green-200 text-center m-2 rounded-md p-6'>
                <h1>What is MongoDB aggregate and how does it work?</h1>
                <p>Aggregation is a way of processing a large number of documents in a collection.it worke grouping data, sorting data into a specific order,</p>
            </div>
        </div>
    );
};

export default Blog;