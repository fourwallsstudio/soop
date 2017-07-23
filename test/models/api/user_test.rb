# == Schema Information
#
# Table name: api_users
#
#  id         :integer          not null, primary key
#  username   :string           not null
#  email      :string           not null
#  credit     :integer          default("100")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class Api::UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
