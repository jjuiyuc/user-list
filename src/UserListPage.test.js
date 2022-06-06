import UserCard from "./component/UserCard";
import Enzyme, { mount, shallow, render } from "enzyme";

const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

describe("Should Render UserListPage", () => {
    //====render出畫面，檢查HTML====
    it('should render UserCard correctly in "debug" mode', () => {
        const component = shallow(<UserCard debug />);

        expect(component).toMatchSnapshot();
    });
    it("renders `100`UserCard ", () => {
        const component = shallow(<UserCard />);
        expect(component.find(".100")).to.have.lengthOf(100);
    });
});
