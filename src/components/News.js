import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general'
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
      }
    constructor() {
        super();
        console.log("Hello i am a constuctor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8605ed978d4048ff8a04e9c04a3998d9&page=1";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    handlePrevClick = async ()=> {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8605ed978d4048ff8a04e9c04a3998d9&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    handleNextClick = async ()=> {
        console.log("Next");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8605ed978d4048ff8a04e9c04a3998d9&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles 
        })
    }
    render() {
        return (
            <div className="container py-4">
                <h1 className="text-center mt-5">News-Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 10) : ""} description={element.description ? element.description.slice(0, 100) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-evenly ">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
export default News
