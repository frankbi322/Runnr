require 'rails_helper'
begin
  Route
rescue
  Route = nil
end

RSpec.describe Route, :type => :model do

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:author_id) }
  it { should validate_presence_of(:distance) }
  it { should validate_presence_of(:coordinates) }
  it { should validate_presence_of(:map_url) }
  it { should belong_to(:author) }
  it { should have_many(:comments) }
  it { should have_many(:completions) }
end
