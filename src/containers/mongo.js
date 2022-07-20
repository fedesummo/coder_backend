class MongodbContainer {
  constructor(model) {
    this.model = model;
  }

  async getAllDocuments() {
    try {
      const docs = await this.model.find();
      // return { status: 200, data: docs };
      return docs;
    } catch (err) {
      return { status: 400, data: err };
    }
  }

  async getOneDocument(data) {
    try {
      const doc = await this.model.findOne(data)
      return doc
    } catch (err) {
      return err
    }
  }

  async getDocumentById(id) {
    try {
      const doc = await this.model.findById(id);
      // return { status: 200, data: doc };
      return doc
    } catch (err) {
      return { status: 400, data: err };
    }
  }

  async saveDocument(data) {
    try {
      const doc = new this.model(data);
      const res = await doc.save();
      return res;
      // return { status: 201, data: res };
    } catch (err) {
      return { status: 400, data: err };
    }
  }

  async updateDocumentById(id, data) {
    try {
      const res = await this.model.findByIdAndUpdate(id, data);
      return { status: 200, data: res };
    } catch (err) {
      return { status: 400, data: err };
    }
  }

  async removeDocumentById(id) {
    try {
      const res = await this.model.findByIdAndRemove(id);
      return { status: 200, data: res };
    } catch (err) {
      return { status: 400, data: err };
    }
  }
}

export default MongodbContainer;