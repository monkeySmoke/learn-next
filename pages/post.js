import Layout from '../components/Layout'

const Content = ({url}) => (
    <div>
        <h1>{url.query.title}</h1>
        <p>this is the blog post content</p>
    </div>
)
const Post = (props) => (
    <Layout>
        <Content url={props.url} />
    </Layout>
)

export default Post