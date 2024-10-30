import React from 'react'

const NewsItem = (props)=> {
        let {title, description, imageUrl, newsUrl, author, date} = props;
        return (
            <div className="my-3">
                <div className="card h-100" style={{width: "18.5rem"}}>
                    <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EJLWUIL23FERXH7B2L3O7C4JEA_size-normalized.jpg&w=1440":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}<span class="badge text-bg-secondary">New</span></h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-body-secondary">by {!author?"Unknown":author} on {date}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark justify-content-start mt-1">Read More</a>
                        </div>
                </div>
            </div>
        )
}

export default NewsItem
