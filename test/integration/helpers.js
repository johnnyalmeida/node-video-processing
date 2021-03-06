import supertest from 'supertest';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';

chai.use(chaiHttp);

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
