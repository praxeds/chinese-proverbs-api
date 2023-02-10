const Proverb = require("../Models/proverb");

const ProverbController = {
  addCard: async (req, res) => {
    // Request validation
    if (!req.body.proverb || !req.body.pinyin || !req.body.translation) {
      return res.status(400).send({
        error: "You have not entered all the necessary data.",
      });
    }
    try {
      const proverb = new Proverb(req.body);
      await proverb.save().then((data) => {
        res.send(data);
      });
    } catch (error) {
      res.status(500).send({
        message:
          error.message ||
          "An error has occurred while adding the new proverb.",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const proverb = await Proverb.findByIdAndDelete(req.params.id);
      res.json(proverb);
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const proverb = await Proverb.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(proverb);
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const proverb = await Proverb.find();
      res.json(proverb);
    } catch (error) {
      console.log(error);
    }
  },
  random: async (req, res) => {
    try {
      const proverb = await Proverb.find();
      const randomProverb = proverb[Math.floor(Math.random() * proverb.length)];
      res.json(randomProverb);
    } catch (error) {
      console.log(error);
    }
  },
  pagination: async (req, res) => {
    try {
      const proverb = await Proverb.find();
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const results = {};
      if (endIndex < proverb.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }

      results.results = proverb.slice(startIndex, endIndex);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ProverbController;
