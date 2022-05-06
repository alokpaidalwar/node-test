import StopWatch from '../models/StopWatch.js';

// To fetch logs based on IP
export const readAllByIp = async (req, res) => {
  const { ip } = req;
  const { page, perPage } = req.query;

  const logs = await StopWatch.paginate(
    { ip },
    {
      page,
      perPage,
    }
  );
  return res.status(200).json({ logs });
};

// To create new log
export const create = async (req, res) => {
  const { buttonType, log } = req.body;
  const { ip } = req;

  const oneLog = await StopWatch.create({ buttonType, log, ip });
  return res.status(200).json({ log: oneLog });
};
