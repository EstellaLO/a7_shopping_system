import p1_img from "./Product1.png"
import p2_img from "./Product2.png"
import p3_img from "./Product3.png"
import p4_img from "./Product4.png"
import p1_1_img from "./Product_1/Product_1_1.png"
import p1_2_img from "./Product_1/Product_1_2.png"
import p1_3_img from "./Product_1/Product_1_3.png"
import p1_4_img from "./Product_1/Product_1_4.png"

//For frontend testing and designing data schemas in the future
let all_product = [
    {
        id: 1,
        name: "Apple AirPods Max 1 Oldest",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3000,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T00:00:00.000Z"
    },
    {
        id: 2,
        name: "Apple Airpods Max 2 Oldest",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3000,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T01:00:00.000Z"
    },
    {
        id: 3,
        name: "Apple Airpods Max 3 Oldest",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T02:00:00.000Z"
    },
    {
        id: 4,
        name: "Apple Airpods Max 4",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T03:00:00.000Z"
    },
    {
        id: 5,
        name: "Macbook Pro 16' 1",
        category: "laptop",
        images: [p2_img],
        new_price: 18999,
        old_price: 19999,
        option_type: "Color",
        option: ["Silver", "Black"],
        tag: ["Macbook", "Apple", "Laptop"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T04:00:00.000Z"
    },
    {
        id: 6,
        name: "Macbook Pro 16' 2",
        category: "laptop",
        images: [p2_img],
        new_price: 18999,
        old_price: 19999,
        option_type: "Color",
        option: ["Silver", "Black"],
        tag: ["Macbook", "Apple", "Laptop"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T05:00:00.000Z"
    },
    {
        id: 7,
        name: "Macbook Pro 16' 3",
        category: "laptop",
        images: [p2_img],
        new_price: 19999,
        old_price: 19999,
        option_type: "Color",
        option: ["Silver", "Black"],
        tag: ["Macbook", "Apple", "Laptop"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T06:00:00.000Z"
    },
    {
        id: 8,
        name: "Macbook Pro 16' 4",
        category: "laptop",
        images: [p2_img],
        new_price: 19999,
        old_price: 19999,
        option_type: "Color",
        option: ["Silver", "Black"],
        tag: ["Macbook", "Apple", "Laptop"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T07:00:00.000Z"
    },
    {
        id: 9,
        name: "Logitech MX Master 3X 1",
        category: "mouse",
        images: [p3_img],
        new_price: 899,
        old_price: 999,
        option_type: [],
        option: [],
        tag: ["Mouse", "Logitech"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T08:00:00.000Z"
    },
    {
        id: 10,
        name: "Logitech MX Master 3X 2",
        category: "mouse",
        images: [p3_img],
        new_price: 899,
        old_price: 999,
        option_type: [],
        option: [],
        tag: ["Mouse", "Logitech"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T09:00:00.000Z"
    },
    {
        id: 11,
        name: "Logitech MX Master 3X 3",
        category: "mouse",
        images: [p3_img],
        new_price: 999,
        old_price: 999,
        option_type: [],
        option: [],
        tag: ["Mouse", "Logitech"],
        no_review: 100, review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T10:00:00.000Z"
    },
    {
        id: 12,
        name: "Logitech MX Master 3X 4",
        category: "mouse",
        images: [p3_img],
        new_price: 999,
        old_price: 999,
        option_type: [],
        option: [],
        tag: ["Mouse", "Logitech"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T11:00:00.000Z"
    },
    {
        id: 13,
        name: "Logitech MX Mechanical 1",
        category: "keyboard",
        images: [p4_img],
        new_price: 1299,
        old_price: 1499,
        option_type: "Switch",
        option: ["Red", "Brown"],
        tag: ["Keyboard", "Logitech"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T12:00:00.000Z"
    },
    {
        id: 14,
        name: "Logitech MX Mechanical 2",
        category: "keyboard",
        images: [p4_img],
        new_price: 1299,
        old_price: 1499,
        option_type: "Switch",
        option: ["Red", "Brown"],
        tag: ["Keyboard", "Logitech"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T13:00:00.000Z"
    },
    {
        id: 15,
        name: "Logitech MX Mechanical 3",
        category: "keyboard",
        images: [p4_img],
        new_price: 1299,
        old_price: 1499,
        option_type: "Switch",
        option: ["Red", "Brown"],
        tag: ["Keyboard", "Logitech"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T14:00:00.000Z"
    },
    {
        id: 16,
        name: "Logitech MX Mechanical 4",
        category: "keyboard",
        images: [p4_img],
        new_price: 1299,
        old_price: 1499,
        option_type: "Switch",
        option: ["Red", "Brown"],
        tag: ["Keyboard", "Logitech"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T15:00:00.000Z"
    },
    {
        id: 17,
        name: "Apple Airpods Max longgggggggggggg",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T16:00:00.000Z"
    },
    {
        id: 18,
        name: "Apple Airpods Max Testing",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T17:00:00.000Z"
    },
    {
        id: 19,
        name: "Apple Airpods Max Testing",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T18:00:00.000Z"
    },
    {
        id: 20,
        name: "Apple Airpods Max Testing",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T19:00:00.000Z"
    },
    {
        id: 21,
        name: "Apple Airpods Max Testing",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T20:00:00.000Z"
    },
    {
        id: 22,
        name: "Apple Airpods Max Price 2000",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 2000,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T21:00:00.000Z"
    },
    {
        id: 23,
        name: "Apple Airpods Max Review 2",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 2,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T22:00:00.000Z"
    },
    {
        id: 24,
        name: "Apple Airpods Max Review 3",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 3,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-03T23:00:00.000Z"
    },
    {
        id: 25,
        name: "Apple Airpods Max Review 4",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 4,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-04T00:00:00.000Z"
    },
    {
        id: 26,
        name: "Apple Airpods Max Review 5",
        category: "headphone",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 3499,
        old_price: 3499,
        option_type: "Color",
        option: ["Silver", "Black", "Pink", "Blue", "Green"],
        tag: ["Headphone", "Apple", "Airpods Max"],
        no_review: 100,
        review: 5,
        description: "Testing",
        comment: [{
            username: 'User1',
            text: 'Comment000001'
        }, {
            username: 'User2',
            text: 'Comment000002'
        }],
        update_time: "2024-04-04T01:00:00.000Z"
    },

]


export default all_product;