import { Request, Response } from 'express';
import { patientService } from '../services';
import { SuccessResponse, InternalErrorResponse, NotFoundResponse } from '../helpers/response';
import { MESSAGES } from '../constants';

async function generateUniquePTNumber() {
  while (true) {
    const min = 1000000000; // Minimum 10-digit number
    const max = 9999999999; // Maximum 10-digit number

    const ptNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const ptNumberStr = ptNumber.toString();

    const existingAccount = await patientService.findOne({ pt_number: ptNumberStr });

    if (!existingAccount) return ptNumberStr;
  }
}

class Controller {
  async create(req: Request, res: Response) {
    req.body.user = res.locals.user._id;
    req.body.pt_number = 'PT' + (await generateUniquePTNumber()).toString();

    const data = await patientService.create(req.body);

    if (!data) return InternalErrorResponse(res);

    return SuccessResponse(res, data);
  }

  async getAll(req: Request, res: Response) {
    let pagination = parseInt(req.params.pagination);

    if (!pagination) pagination = 1;

    pagination = (pagination - 1) * 10;

    const data = await patientService.getAll(pagination);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async getProfile(req: Request, res: Response) {
    const { id } = res.locals.user;

    const data = await patientService.findOne({ user: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async getCount(req: Request, res: Response) {
    const data = await patientService.getCount(req.query);

    // if nothing exists just return 0 as the count
    if (!data) return SuccessResponse(res, { data: 0 });

    return SuccessResponse(res, data);
  }

  async find(req: Request, res: Response) {
    console.log(req.query);

    const data = await patientService.find(req.query);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = await patientService.update({ _id: id }, req.body);

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.UPDATED);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await patientService.softDelete({ _id: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.DELETED);
  }

  // Admins only
  async hardDelete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await patientService.hardDelete({ _id: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.DELETED);
  }
}

export const patientController = new Controller();
