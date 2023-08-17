const SingleBlog = ({params}) => {
    const [year, id] = params.segments || [];
    return (
        <div>
            single Blogs {year || new Date().getFullYear()} for {id || 32}
        </div>
    );
};

export default SingleBlog;