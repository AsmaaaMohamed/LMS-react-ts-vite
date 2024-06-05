import { Fragment } from "react";
import { PageHeader } from "@components/common";
import { PostCard } from "@components/blog";
import { SearchWidget } from "@components/common";
import PostCategorWidget from "@components/blog/PostCategoryWidget/PostCategoryWidget";
import PostPopularWidget from "@components/blog/PostPopularWidget/PostPopularWidget";
import ArchiveWidget from "@components/blog/ArchiveWidget/ArchiveWidget";
import GalleryWidget from "@components/blog/GalleryWidget/GalleryWidget";
import PopularTagWidget from "@components/blog/Tag/PopularTagWidget";

const Blog = () => {
  return (
    <Fragment>
      <PageHeader />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 justify-content-center g-4">
                    <div className="col">
                      <PostCard />
                    </div>
                    <div className="col">
                      <PostCard />
                    </div>
                    <div className="col">
                      <PostCard />
                    </div>
                    <div className="col">
                      <PostCard />
                    </div>
                    <div className="col">
                      <PostCard />
                    </div>
                    <div className="col">
                      <PostCard />
                    </div>
                    <div className="col">
                      <PostCard />
                    </div>
                    <div className="col">
                      <PostCard />
                    </div>
                  </div>
                  {/* <ul className="default-pagination lab-ul">
                    <li><a href="#"><i className="icofont-rounded-left"></i></a></li>
                    <li><a href="#">01</a></li>
                    <li><a href="#" className="active">02</a></li>
                    <li><a href="#">03</a></li>
                    <li><a href="#"><i className="icofont-rounded-right"></i></a></li>
                  </ul> */}
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <SearchWidget />
                <PostCategorWidget />
                <PostPopularWidget />
                <ArchiveWidget />
                <GalleryWidget />
                <PopularTagWidget />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
