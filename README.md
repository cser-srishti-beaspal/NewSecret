# Vulnerable JS DM

This is a very simple, single-file JavaScript project with highly vulnerable dependencies. It is intended to be used for testing and demonstrating security scanning tools such as **Snyk**, **npm audit**, or other dependency scanners.

## Dependencies and Vulnerabilities

This project depends on the following vulnerable package versions:

1. **lodash@4.17.11** - Vulnerable to Prototype Pollution (e.g., [CVE-2019-10744](https://nvd.nist.gov/vuln/detail/CVE-2019-10744), [CVE-2020-8203](https://nvd.nist.gov/vuln/detail/CVE-2020-8203)).
2. **minimist@1.2.0** - Vulnerable to Prototype Pollution (e.g., [CVE-2020-7598](https://nvd.nist.gov/vuln/detail/CVE-2020-7598), [CVE-2021-3918](https://nvd.nist.gov/vuln/detail/CVE-2021-3918)).
3. **js-yaml@3.13.0** - Vulnerable to Code Injection / Arbitrary Code Execution (e.g., [CVE-2019-20149](https://nvd.nist.gov/vuln/detail/CVE-2019-20149)).

## Getting Started

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Run the application to see the prototype pollution demonstrations:
   ```bash
   npm start
   ```

## Disclaimer

> [!CAUTION]
> This project contains known vulnerable code and dependencies. It is designed **strictly for testing, educational, and security demonstration purposes**. Do not deploy this project or any of its dependencies to production environments.
