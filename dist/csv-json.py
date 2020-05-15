import csv
import json
import os
import sys
import codecs
import pandas as pd

os.chdir(sys.path[0])  # 读取相对路径
csvfile = open("x.csv", "r", encoding="utf-8-sig")
next(csvfile)  # 跳过第一行
jsonfile = open("x.json", "w", encoding="utf-8-sig")
namesss = pd.read_csv("x.csv")
fieldnames1 = namesss.columns
aaaa = tuple(fieldnames1)
reader = csv.DictReader(csvfile, aaaa)
for row in reader:
    json.dump(row, jsonfile, ensure_ascii=False)
    jsonfile.write("\n")
jsonfile.close()
csvfile.close()
print("Successful!")
f = open("x.json", "r", encoding="utf-8-sig")
lines = f.read()
f.close()
lines_json = (
    lines.replace('"name"', "name")
    .replace('"url"', "url")
    .replace('"artist"', "artist")
    .replace('"cover"', "cover")
    .replace('"lrc"', "lrc")
)
n = open("x.json", "w")
n.write(lines_json)
n.close()
print("Replace Successful!")


def ReadFile(filePath, encoding="gbk"):
    with codecs.open(filePath, "r", encoding) as f:
        return f.read()


def WriteFile(filePath, u, encoding="utf-8"):
    with codecs.open(filePath, "w", encoding) as f:
        f.write(u)


def GBK2UTF8(src, dst):
    content = ReadFile(src, encoding="gbk")
    WriteFile(dst, content, encoding="utf-8")


GBK2UTF8("x.json", "xconverted.json")
print("Converted Successful!")
