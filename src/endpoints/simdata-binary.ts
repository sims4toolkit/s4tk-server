import { SimDataResource } from "@s4tk/models";

/**
 * Parses the given XML content as a SimData and returns it in binary format.
 * 
 * @param xml SimData XML to convert
 */
export default async function simDataXmlToBinary(xml: string): Promise<Buffer> {
  return new Promise(async (resolve, reject) => {
    try {
      const simdata = SimDataResource.fromXml(xml);
      const result = simdata.buffer; // just to let it throw if needed
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}
