import { SimDataResource } from "@s4tk/models";

/**
 * Parses the given base-64 encoded string as a SimData file, and returns its
 * XML.
 * 
 * @param bin SimData binary to convert to XML
 */
export default async function simDataBinaryToXml(bin: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const buffer = Buffer.from(bin, 'base64');
      const simdata = SimDataResource.from(buffer);
      const xml = simdata.toXmlDocument().toXml();
      resolve(xml);
    } catch (err) {
      reject(err);
    }
  });
}
