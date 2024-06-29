const { describe, beforeEach, test, expect } = require("@jest/globals")
const {  createTour, getTours, updateTour, deleteTour } = require("../../src/services/tour.service");
const TourModel = require("../../src/models/tour.model")
const EventModel = require("../../src/models/event.model");
const DateModel = require("../../src/models/date.model")

const createSpy = jest.spyOn(TourModel, 'create');
const findSpy = jest.spyOn(TourModel, 'find');
const findByIdAndDeleteSpy = jest.spyOn(TourModel, 'findByIdAndDelete');
const deleteManyEventSpy = jest.spyOn(EventModel, "deleteMany");
const deleteManyDateSpy = jest.spyOn(DateModel, "deleteMany");


describe("Test Create Tour With Correct Input", () => {
    beforeEach(() => {
        createSpy.mockReturnValue({
            _id: 1
        });
    });

    test("createTour should return the newly created tours ID", async () => {
        const result = await createTour({});

        expect(result.id).toBeTruthy()
    });

    test("createTour should return success after creating an object", async () => {
        const result = await createTour({});

        expect(result.success).toBe(true)
    });
});

describe("Test Create Tour With Incorrect Input", () => {
    beforeEach(() => {
        createSpy.mockReturnValue(null);
    });

    test("createTour should return error after creating an object", async () => {
        const result = await createTour({});

        expect(result.error).toBeTruthy()        
    });

    test("creatTour should return a return a false success status for bad requrest", async () => {
        const result = await createTour({});

        expect(result.success).toBe(false);
    })
});

describe("Test Get Tours On Successful Requests", () => {
    beforeEach(() => {
        findSpy.mockReturnValue([{
            id: 1,
            title: "Test Tour",
            subtitle: "test subtitle",
            shortDescription: "Short description",
            longDescription: "long description",
            promoter: {
                _id: 1
            },
            events: {
                _id: 1                
            }
        },{
            id: 2,
            title: "Test Tour",
            subtitle: "test subtitle",
            shortDescription: "Short description",
            longDescription: "long description",
            promoter: {
                _id: 2
            },
            events: {
                _id: 2                
            }
        },{
            id: 1,
            title: "Test Tour",
            subtitle: "test subtitle",
            shortDescription: "Short description",
            longDescription: "long description",
            promoter: {
                _id: 3
            },
            events: {
                _id: 3                
            }
        }]);
    });

    test("getTour should return a tour object", async () => {
        const result = await getTours();

        expect(typeof result).toBe("object");
    });   
    
    test("should return a list of tour objects", async () => {
        const result = await getTours();

        expect(result.tours.length).toBeGreaterThan(0);
    })

    test("should return a true success value", async () => {
        const result = await getTours();

        expect(result.success).toBe(true);
    })
});

describe("Test Gets Tours on Bad Input", () => {
    beforeEach(() => {        
        findSpy.mockRejectedValue(new Error("Failed to connect to DB"));
    });

    test("getTour should return an error", async () => {
        const result = await getTours();

        expect(result.error).toBeTruthy();
    });

    test("getTour should return a false success value", async () => {
        const result = await getTours();

        expect(result.success).toBe(false);
    })
});

describe("Check Update tour", () => {
    test("Should be able to handle missing id", async () => {
        const result = await updateTour({});

        expect(result.success).toBe(false)
    });    
});
