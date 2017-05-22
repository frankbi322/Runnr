require 'rails_helper'

begin
  Comment
rescue
  Comment = nil
end

RSpec.describe Comment, :type => :model do
  it { should validate_presence_of(:body) }
  it { should validate_presence_of(:author_id) }
  it { should validate_presence_of(:route_id) }
  it { should belong_to(:author) }
  it { should belong_to(:route) }
end
