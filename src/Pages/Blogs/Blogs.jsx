import React from 'react';

const Blogs = () => {
    return (
        <div className='w-4/5 mx-auto mt-8 '>
            <div className='bg-green-50 rounded p-16 my-6'>
                <h1 className='text-[#515151] text-4xl'>Difference between javascript and nodejs?</h1>
                <p className='ml-4 mt-2'>NODE JS : NodeJS is a Javascript runtime environment. It's used on the server-side. Nodejs is written in C, C++ and Javascript.</p>
                <p className='ml-4 mt-2'>JAVASCRIPT : Javascript can only be run in the browsers. It's used on the client-side. It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. </p>
            </div>
            <div className='bg-green-50 rounded p-16 my-6'>
                <h1 className='text-[#515151] text-4xl'>When should you use nodejs and when should you use mongodb!</h1>
                <p className='ml-4 mt-2'>we should use node js When we need to send updates to the user in real-time.Because When we use Node.js, the server has no need of maintaining separate threads for each open connection.</p>
                <p className='ml-4 mt-2'>When we need require less management. When we need automatic repair, easier data distribution, and simpler data models make administration. </p>
            </div>
            <div className='bg-green-50 rounded p-16 my-6'>
                <h1 className='text-[#515151] text-4xl'>Differences between sql and nosql databases?</h1>
                <p className='ml-4 mt-2'>SQL : Databases are categorized as Relational Database Management System (RDBMS). SQL databases have fixed or static or predefined schema. SQL databases are vertically scalable. MySQL, Oracle, Sqlite, PostgreSQL and MS-SQL etc. are the example of SQL database.</p>
                <p className='ml-4 mt-2'>NOSQL : NoSQL databases are categorized as Non-relational or distributed database system. NoSQL databases have dynamic schema. NoSQL databases are horizontally scalable. MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase, Neo4j, CouchDB etc. are the example of nosql database</p>
            </div>
            <div className='bg-green-50 rounded p-16 my-6'>
                <h1 className='text-[#515151] text-4xl'>What is the purpose of jwt and how does it work?</h1>
                <p className='ml-4'>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information. </p>
                <p className='ml-4'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
            </div>
        </div>
    );
};

export default Blogs;