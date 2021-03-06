import request from 'supertest';
import { app } from '../app';
import jwt from 'jsonwebtoken';
import { TicketCategory } from '@gb-xtickets/common';

export const noop = () => {};

export const getSignupCookie = (
  id: number = 1,
  email: string = 'test@test.com'
): string[] => {
  const payload = {
    id,
    email,
  };

  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Build session Object.
  const session = { jwt: token };

  // Turn that session into JSON
  const sessionJSON = JSON.stringify(session);

  // Take JSON and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString('base64');

  // return a string thats the cookie with the encoded data
  return [`express:sess=${base64}`];
};

export const createTicket = async (params: {
  title: string;
  price: number;
  category: TicketCategory;
  description: string;
  date: number;
}) => {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', getSignupCookie())
    .send(params)
    .expect(201);

  return response;
};
