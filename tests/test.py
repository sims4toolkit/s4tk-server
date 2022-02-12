import requests  # pip3 install requests

BASE_URI = "http://localhost:3000"

HEADERS = {
    "Content-Type": "text/plain"
}

EXAMPLE_XML = """<?xml version="1.0" encoding="utf-8"?>
<SimData version="0x00000101" u="0x00000000">
  <Instances>
    <I name="Buff_Memory_scared" schema="Buff" type="Object">
      <T name="audio_sting_on_add">FD04E3BE-001407EC-8AF8B916CF64C646</T>
      <T name="audio_sting_on_remove">FD04E3BE-001407EC-3BF33216A25546EA</T>
      <T name="buff_description">0x9D3FD52C</T>
      <T name="buff_name">0xF295A063</T>
      <T name="icon">00B2D882-00000000-7BDC6D391EB64204</T>
      <T name="mood_type">251719</T>
      <T name="mood_weight">1</T>
      <T name="timeout_string">0x00000000</T>
      <T name="timeout_string_no_next_buff">0x00000000</T>
      <T name="ui_sort_order">1</T>
    </I>
  </Instances>
  <Schemas>
    <Schema name="Buff" schema_hash="0x0D045687">
      <Columns>
        <Column name="audio_sting_on_add" type="ResourceKey" flags="0x00000000" />
        <Column name="audio_sting_on_remove" type="ResourceKey" flags="0x00000000" />
        <Column name="buff_description" type="LocalizationKey" flags="0x00000000" />
        <Column name="buff_name" type="LocalizationKey" flags="0x00000000" />
        <Column name="icon" type="ResourceKey" flags="0x00000000" />
        <Column name="mood_type" type="TableSetReference" flags="0x00000000" />
        <Column name="mood_weight" type="Int32" flags="0x00000000" />
        <Column name="timeout_string" type="LocalizationKey" flags="0x00000000" />
        <Column name="timeout_string_no_next_buff" type="LocalizationKey" flags="0x00000000" />
        <Column name="ui_sort_order" type="Int32" flags="0x00000000" />
      </Columns>
    </Schema>
  </Schemas>
</SimData>"""


def simdata_xml_to_binary(xml):
    uri = f"{BASE_URI}/simdata-binary"
    result = requests.get(url=uri, headers=HEADERS, data=xml)
    return result.text


print(simdata_xml_to_binary(EXAMPLE_XML))
