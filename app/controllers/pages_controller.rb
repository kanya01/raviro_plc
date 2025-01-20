class PagesController < ApplicationController
  def home
    @featured_publications = Publication.featured.limit(3)
    @recent_job_listings = JobListing.recent.limit(3)
  end

  def about
    render
  end

  def contact
  end
end
