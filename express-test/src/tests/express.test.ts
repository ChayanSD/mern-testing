import { app } from "../index";
import {describe , expect , it} from '@jest/globals'
import request from "supertest";
describe('Test the express sum route',()=>{
    it('Should return 3 when pass 2,1',async()=>{
      const res = await request(app).post('/sum').send({
        a : 1,
        b : 2
    });
       expect(res.body.sum).toBe(3);
    })
})