import React from 'react'

const List = ({results}) => {
    const renderedList = results.map((item) => {
        return (
            <div key={item.pageid} className='ui segment'>
                <h1>
                    <a href={'https://en.wikipedia.org/wiki/' + item.title} className='header'>{item.title}</a>
                </h1>
                <p dangerouslySetInnerHTML={{ __html: item.snippet}}>
                    
                </p>
            </div>
        )
    })

    return renderedList;
}

export default List