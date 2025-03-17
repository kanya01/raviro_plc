module SkipTestsHelper
  # Helper to skip tests for features not in active development
  def skip_if_not_in_scope(feature)
    not_in_scope = %w[publications job_listings pages]
    skip("Skipping test for #{feature} as it's not in active development") if not_in_scope.include?(feature)
  end
end