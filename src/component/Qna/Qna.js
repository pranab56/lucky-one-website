import React from 'react';
import './Qna.css'
const Qna = () => {
    return (
        <section className='textAns'>
            <div className='Ans1'>
                <h4># How react work ?</h4>
            <p>In order to work in React we first need two things. One is React and the other is React DOM. When a component is written, it contains pure JavaScript code. We need to convert these JavaScript codes into HTML code. And what we see on the website is HTML code. A package called React takes work to convert this JavaScript code to HTML code. That is, the package that is used to inject the HTML code into the HTML file is React DOM. So React DOM helps to convert HTML code from components to inject into the main HTML page. This whole process goes on without any reload. That is, without reloading the page, dynamically generates the HTML codes in the HTML file i.e. DOM. And that's how React works.
</p>
            </div>
            <div className='Ans2'>
                <h4># Difference between state vs props ?</h4>
                <p>We can modify and update the data using State. But we cannot update data using props. If you need to update the data through Props, then the data can be updated by converting to State.</p>
            </div>
        </section>
    );
};

export default Qna;