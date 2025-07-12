import "./blog.css";

function Blog() {
  return (
    <>
      <main>
        <div className="blog-container fade-in">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">
            Hier komt binnenkort onze blog met tips en nieuws!
          </p>
          <div className="blog-content">
            <p>
              We zijn druk bezig met het opzetten van onze blog. Hier vind je
              binnenkort artikelen over mollen, wespen, vogels en meer!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Blog;
